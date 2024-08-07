import ProgramComponent from '@/components/Home_component/Program_component';
import HomeHeader from '@/components/Home_component/Home_header';
import PalestineProgram from '@/components/Palestine_program';



export async function getStaticProps(context) {
  const { locale } = context

  const res = await fetch("https://admin.joacademy.net/api/v1/settings", {
    headers: {
      "accept": "application/json, text/plain, /",
      "accept-language": "en-US,en;q=0.9,ar;q=0.8,en-GB;q=0.7",
      "api": 1,
      "lang": locale,
    },
  });
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {

  return (
    <>
      <div className="flex flex-col place-items-center">
        <HomeHeader />
        <div className="programs flex justify-center mt-2">
          {data?.data.programs.map((prog, index) => {
            return <ProgramComponent key={index} image={prog.image} name={prog.name} color={prog?.colors[0]} />
          })}
        </div>
        <PalestineProgram/>
      </div>
    </>
  );
}

