import getCurrentUser from "@/app/lib/actions/get-current-user";
import openai, { getEmbedding } from "@/app/lib/openai";
import { applicationsIndex } from "@/app/lib/pinecone";
import { ChatCompletionMessage } from "openai/resources/index.mjs";
import { OpenAIStream, StreamingTextResponse } from "ai";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const messages: ChatCompletionMessage[] = body.messages;

    const messagesTruncated = messages.slice(-6);

    const embedding = await getEmbedding(
      messagesTruncated.map((message) => message.content).join("\n")
    );

    const user = await getCurrentUser();
    const userId = user?.id;

    const vectorQueryResponse = await applicationsIndex.query({
      vector: embedding,
      topK: 4,
      filter: { userId },
    });

    const relevantApplications = await prisma?.application.findMany({
      where: {
        id: {
          in: vectorQueryResponse.matches.map((match) => match.id),
        },
      },
    });
    console.log(relevantApplications);

    const systemMessage: ChatCompletionMessage = {
      role: "assistant",
      content:
        "You are an intellegent job application taking app. You answer the user's question based on their existing job applications." +
        "The relevant job applications for this query are:\n" +
        relevantApplications
          ?.map(
            (application) =>
              `Company:${application.company}\n\nPosition:${application.position}n\nStatus:${application.status}\n\nDate:${application.date}n\nNote:${application.note}n\nJob Description Link:${application.jobDescriptionLink}`
          )
          .join("\n\n"),
    };

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      stream: true,
      messages: [systemMessage, ...messagesTruncated],
    });

    const stream = OpenAIStream(response);

    return new StreamingTextResponse(stream);
  } catch (error) {
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
