export function closeModal(setIsModalOpen) {
  setTimeout(() => {
    setIsModalOpen(false);
  }, 2500);
  return "Hi";
}
