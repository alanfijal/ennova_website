"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";

const communityImages = [
  {
    id: 1,
    src: "/images/life_at_ennova/IMG_1302.JPG",
    alt: "Ennova team event",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "/images/life_at_ennova/100_2119.JPG",
    alt: "Community gathering",
    span: "row-span-1",
  },
  {
    id: 3,
    src: "/images/life_at_ennova/IMG_1156.JPG",
    alt: "Team activity",
    span: "row-span-1",
  },
  {
    id: 4,
    src: "/images/life_at_ennova/02df2b70-15bc-4a27-b8a3-72b18ae3e44a.JPG",
    alt: "Life at Ennova",
    span: "row-span-2",
  },
  {
    id: 5,
    src: "/images/life_at_ennova/IMG_9042.jpg",
    alt: "Ennova community",
    span: "row-span-1",
  },
  {
    id: 6,
    src: "/images/life_at_ennova/IMG_9089.jpg",
    alt: "Ennova experience",
    span: "row-span-1",
  },
];

export function MasonryGallery() {
  const [selectedImage, setSelectedImage] = useState<typeof communityImages[0] | null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleImageClick = (image: typeof communityImages[0]) => {
    setSelectedImage(image);
    onOpen();
  };

  const handleClose = () => {
    onClose();
    setSelectedImage(null);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
        {communityImages.map((image, index) => (
          <motion.div
            key={image.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative ${image.span} rounded-2xl overflow-hidden cursor-pointer group`}
            onClick={() => handleImageClick(image)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />

          </motion.div>
        ))}
      </div>

      {/* Image Modal */}
      <Modal
        isOpen={isOpen}
        onClose={handleClose}
        size="3xl"
        classNames={{
          backdrop: "bg-black/80 backdrop-blur-sm",
          base: "bg-transparent shadow-none",
        }}
      >
        <ModalContent>
          <ModalBody className="p-0">
            {selectedImage && (
              <div className="relative w-full h-[80vh] rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />

              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
