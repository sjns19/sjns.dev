import type { NextPage } from 'next';
import { SITE_URL } from '@/config';
import { Layout, AboutPage, Meta } from '@/components';

const About: NextPage = () => {
	return (
		<Layout pageTitle="About">
			<Meta
				title="About - Sujan Shrestha"
				description="Hello there! My name is Sujan Shrestha. As a self-taught person, I started coding in 2013 when I decided to create a community for a game's multiplayer server. This initial experience opened the doors for me to enter the world of programming. In 2016, I shifted my focus towards web development, which has now become my main area of interest."
				ogImage={`${SITE_URL}/og-banner.png`}
				ogURL={`${SITE_URL}/about`}
			/>
			<AboutPage />
		</Layout>
	);
};

export default About;
