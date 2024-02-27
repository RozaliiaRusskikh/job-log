const Footer = () => {
  return (
    <footer className="flex flex-col text-xs md:text-sm items-center italic">
      <p>© JobLogs. All Rights Reserved. </p>
      <a
        className="cursor-pointer hover:underline hover:decoration-amber-500 hover:decoration-2 transition-all"
        href="mailto: rrrusskikh@gmail.com"
      >
        rrrusskikh@gmail.com
      </a>
    </footer>
  );
};

export default Footer;
