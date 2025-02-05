import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_HOST;

export const endpoints = {
  home: (Locale: string) => `/api/homes?locale=${Locale}`,
  downloadFile: (locale: string) =>
    `/api/cvs?populate=${locale == "en" ? "cv_en" : "cv_pl"}`,
  aboutMe: (locale: string) => `/api/about-mes?locale=${locale}&populate=*`,
  portfolio: (locale: string) => `/api/portfolios?locale=${locale}`,
  contact: (locale: string) => `/api/contacts?locale=${locale}`,
  contactForm: () => "/api/contact-forms",
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
export async function downloadFile(locale: string): Promise<void> {
  try {
    const fileData = await fetchData<{
      [key: string]: { url: string; name: string };
    }>(endpoints.downloadFile(locale));

    if (!fileData) throw new Error("File data not found");

    const fileKey = locale === "en" ? "cv_en" : "cv_pl";
    const file = fileData[fileKey];

    if (!file || !file.url || !file.name) {
      throw new Error("File metadata is missing");
    }

    const fileResponse = await axios.get(file.url, {
      responseType: "blob",
    });

    const blob = new Blob([fileResponse.data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    console.error("Error downloading file: ", error);
  }
}

export default endpoints;
