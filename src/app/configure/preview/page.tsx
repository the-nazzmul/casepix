import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignPreview from "./_component/DesignPreview";

interface IPreviewPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const PreviewPage = async ({ searchParams }: IPreviewPageProps) => {
  const { id } = searchParams;

  if (!id || typeof id !== "string") {
    return notFound();
  }

  const configuration = await db.configuration.findUnique({
    where: { id },
  });

  if (!configuration) {
    return notFound();
  }

  return <DesignPreview configuration={configuration} />;
};

export default PreviewPage;
