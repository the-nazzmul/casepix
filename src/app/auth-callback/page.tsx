"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAuthStatus } from "./action";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

const Page = () => {
  const [configId, setConfigId] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const configurationId = localStorage.getItem("configurationId");
    if (configurationId) {
      setConfigId(configurationId);
    }
  }, []);

  const { data, isFetched } = useQuery({
    queryKey: ["auth-callback"],
    queryFn: async () => await getAuthStatus(),
    retry: true,
    retryDelay: 500,
    enabled: configId !== null,
  });

  useEffect(() => {
    if (isFetched) {
      if (data?.success) {
        if (configId) {
          localStorage.removeItem("configurationId");
          router.push(`/configure/preview?id=${configId}`);
        }
      } else {
        console.log("No config");
        router.push("/");
      }
    }
  }, [data, configId, router, isFetched]);

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-500" />
        <h3 className="font-semibold text-xl">Signing you in...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;
