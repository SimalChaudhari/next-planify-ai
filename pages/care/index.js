import CareLayout from "@/components/care/CareLayout";

export default function CarePage() {
  return <CareLayout />;
}

CarePage.getLayout = function getLayout(page) {
  return page;
};
