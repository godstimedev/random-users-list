import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<main>
			<Head>
				<title>Ninja List | Home</title>
				<meta name="keywords" content="ninjas" />
			</Head>
			<div>
				<h1 className={styles.title}>Home</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias labore tenetur enim soluta
					quisquam. Laborum laudantium minima iusto deserunt repellendus sed, vel dolor in hic sunt
					doloremque veritatis eveniet veniam corporis fugit illum atque? Eos illum voluptatem laudantium
					labore pariatur!
				</p>
				<Link href="/ninjas">
					<a className={styles.btn}>See Ninja List</a>
				</Link>
			</div>
		</main>
	);
}
