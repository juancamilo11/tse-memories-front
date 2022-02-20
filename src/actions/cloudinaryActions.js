export const uploadFileToCloudinary = async (file, userEmail, memoryId) => {
  const cloudinaryURL = `https://api.cloudinary.com/v1_1/dahwtwzdl/upload`;

  const formData = new FormData();

  formData.append("upload_preset", "react-journal-cloudinary");
  formData.append("file", file);
  formData.append("folder", `/tse_memories/memories/${userEmail}/${memoryId}`);

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
