"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Modal, ModalContent, ModalBody, useDisclosure } from "@heroui/modal";

// Sample community images - Replace these with actual Sanity CMS data
const communityImages = [
  {
    id: 1,
    src: "/images/community/ski-trip.jpg",
    alt: "Team ski trip in the Alps",
    span: "row-span-2",
  },
  {
    id: 2,
    src: "/images/community/networking-dinner.jpg",
    alt: "Networking dinner event",
    span: "row-span-1",
  },
  {
    id: 3,
    src: "/images/community/workshop.jpg",
    alt: "Workshop session",
    span: "row-span-1",
  },
  {
    id: 4,
    src: "/images/community/team-photo.jpg",
    alt: "Team photo at Esade",
    span: "row-span-2",
  },
  {
    id: 5,
    src: "/images/community/hackathon.jpg",
    alt: "Hackathon weekend",
    span: "row-span-1",
  },
  {
    id: 6,
    src: "/images/community/conference.jpg",
    alt: "Speaking at conference",
    span: "row-span-2",
  },
  {
    id: 7,
    src: "/images/community/social-event.jpg",
    alt: "Social gathering",
    span: "row-span-1",
  },
  {
    id: 8,
    src: "/images/community/project-work.jpg",
    alt: "Collaborative project work",
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

            {/* Placeholder with gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <span className="text-foreground/40 text-sm font-medium">
                {image.alt}
              </span>
            </div>

            {/* Uncomment when actual images are available */}
            {/* <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            /> */}

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <p className="text-sm font-medium drop-shadow-lg">{image.alt}</p>
            </div>
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
                {/* Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-foreground/60 text-lg font-medium block mb-2">
                      {selectedImage.alt}
                    </span>
                    <span className="text-foreground/40 text-sm">
                      Image preview
                    </span>
                  </div>
                </div>

                {/* Uncomment when actual images are available */}
                {/* <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                /> */}

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white text-lg font-medium">
                    {selectedImage.alt}
                  </p>
                </div>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
