import { Container, Divider } from "@chakra-ui/react";
import ProfileSection from "../components/section/ProfileSection";
import TechStackSection from "../components/section/TechStackSection";
import styles from "../../styles/Home.module.css";
import useSWR from "swr";
import Meta from "../components/Meta";
import { SideProjectSection } from "../components/section/SideProjectSection";
import PageLayout from "../layout/PageLayout";
import Head from "next/head";
import AchievementsSection from "../components/section/AchievementsSection";
export default function Home() {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());
  const { data } = useSWR("/api/spotify", fetcher);

  return (
    <>
    <PageLayout title="Shardendu | Software Developer">
    <Head>
        <title>Shardendu | Portfolio</title>
        <meta name="description" content="Shardendu | Software Developer" />
        <link rel="icon" href="/ssc.png" />
      </Head>
      <Container maxW="container.lg" mt={["5", "10"]} mb={["5", "10"]}>
        <ProfileSection song={data} />
        <Divider my={10} />
        <TechStackSection />
        <Divider my={10} />
        <SideProjectSection />
        <Divider my={10} />
        <AchievementsSection />
        <Divider my={10} />
      </Container>
    </PageLayout>
    </>
  );
}
