"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/cards/themes/all");
  }, []);

  return <div className=''></div>;
};

export default page;