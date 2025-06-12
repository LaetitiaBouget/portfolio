import axiosInstance from '../../api/axios';

export async function projectLoader({ params }) {
  try {
    const response = await axiosInstance.get(`/projects/${params.id}`);
    return response.data;
  } catch (error) {
    throw new Response("Not Found", { status: 404 });
  }
}