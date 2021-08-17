import { useState } from 'react'

export const useModal = () => {
  const [showModal, setShowModal] = useState(false)

  const handleModal = () => setShowModal(!showModal)
  const closeModal = () => setShowModal(false)
  return { showModal, handleModal, closeModal }
}
