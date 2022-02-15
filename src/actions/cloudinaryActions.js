export const uploadFileToCloudinary = async (file, userId, memoryId) => {
  // Url -> {{userId}}/{{memoryId}}/image_name

  const cloudinaryURL = `https://api.cloudinary.com/v1_1/dahwtwzdl/upload`;

  const formData = new FormData();

  formData.append("upload_preset", "react-journal-cloudinary");
  formData.append("file", file);

  try {
    const response = await fetch(cloudinaryURL, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      const cloudinaryResponse = await response.json();
      return cloudinaryResponse.secure_url;
    } else {
      throw await response.json();
    }
  } catch (error) {
    throw error;
  }
};

export const deleteImageFromCloudinary = async (urlImageToDelete) => {
  //toDo -> Delete image from cloudinary
};
