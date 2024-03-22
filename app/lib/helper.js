export function closeModal(setIsModalOpen) {
  setTimeout(() => {
    setIsModalOpen(false);
  }, 2000);
}
