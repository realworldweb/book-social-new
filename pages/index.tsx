/*react*/
import { ReactElement } from 'react';

/*layout*/
import Layout from '../layouts/main';

export default function Home() {
	return <></>;
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <Layout>{page}</Layout>;
};
