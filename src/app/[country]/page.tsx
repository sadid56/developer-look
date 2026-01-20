import CountryNews from "@/components/news/CountryNews";

interface PageProps {
  params: Promise<{ country: string }>;
}

const CountryNewsPage = async ({ params }: PageProps) => {
  const { country } = await params;

  return (
    <div>
      <CountryNews country={country} />
    </div>
  );
};

export default CountryNewsPage;
