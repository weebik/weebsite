import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_HOST;

export const endpoints = {
  home: (Locale: string) => `/api/homes?locale=${Locale}`,
  aboutMe: (locale: string) => `/api/about-mes?locale=${locale}`,
  portfolio: (locale: string) => `/api/portfolios?locale=${locale}`,
  contact: (locale: string) => `/api/contacts?locale=${locale}`,
  contactForm: () => "/api/contact-forms",
  // downloadFile: (locale: string) => `/api/homes?populate=cvFile`,
};

export async function fetchData<T>(endpoint: string): Promise<T | null> {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response.data.data[0] as T;
  } catch (error) {
    console.error("Error fetching data: ", error);
    return null;
  }
}

export async function postData<T>(
  endpoint: string,
  data: unknown
): Promise<T | null> {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, { data });
    return response.data as T;
  } catch (error) {
    console.error("Error posting data: ", error);
    return null;
  }
}

// export async function downloadFile(fileId: number): Promise<void> {
//   try {
//     const fileData = await fetchData<{ url: string; name: string }>(
//       endpoints.downloadFile(fileId)
//     );
//     if (!fileData) throw new Error("File data not found");

//     const fileResponse = await axios.get(`${API_BASE_URL}${fileData.url}`, {
//       responseType: "blob",
//     });
//     const blob = new Blob([fileResponse.data]);
//     const link = document.createElement("a");
//     link.href = window.URL.createObjectURL(blob);
//     link.download = fileData.name;
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   } catch (error) {
//     console.error("Error downloading file: ", error);
//   }
// }

export default endpoints;
