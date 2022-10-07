import { useState, createContext, useContext } from "react";

const libraryContext = createContext();
const useLibrary = () => useContext(libraryContext);

const LibraryProvier = ({ children }) => {
    const [openModal, setOpenModal] = useState(false)

    const handleClickModalOpen = () => {
        setOpenModal(true);
    };

    const handleModalClose = (value) => {
        setOpenModal(false);
    };
    return (
        <libraryContext.Provider value={{ openModal, handleClickModalOpen, handleModalClose }}>
            {children}
        </libraryContext.Provider>
    );
}

export { useLibrary, LibraryProvier };