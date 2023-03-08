import Head from "next/head";

import styles from "@/styles/Home.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
	const { data: session } = useSession();

	return (
		<>
			<Head>
				<title>Netflix Clone</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				{session && (
					<>
						Signed in as {session.user.email} <br />
						<button onClick={() => signOut()}>Sign out</button>
					</>
				)}
				{!session && (
					<>
						Not signed in <br />
						<button onClick={() => signIn()}>Sign in</button>
					</>
				)}
				<div className={styles.description}>
					<h1 className={styles.description_title}>
						Unlimited movies, TV shows, and more.
					</h1>
					<h2 className={styles.description_subtitle}>
						Watch anywhere. Cancel anytime. Ready to watch?
					</h2>
					<p className={styles.description_text}>
						Ready to watch? Enter your email to create or restart your membership.
					</p>
				</div>
				<div className={styles.form}>
					<input type="text" placeholder="Email address" className={styles.form_input} />
					<button onClick={() => signIn()} className={styles.form_btn}>
						Get Started
						<FontAwesomeIcon icon={faChevronRight} className={styles.form_icon} />
					</button>
				</div>
			</main>
		</>
	);
}
