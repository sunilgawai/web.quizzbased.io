import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	return (
		<main className="flex min-h-screen bg-[#f4f8ff] flex-col items-center justify-between p-24">
			<div className="container min-h-full flex items-center justify-between gap-8">
				<div className="flex flex-col items-start justify-evenly gap-8">
					<h1 className="font-semibold text-xl">Powered by AI</h1>
					<h2 className="font-extrabold text-5xl">The Online Quiz App</h2>
					<p className="font-medium text-lg">
						Engage your audience with live, virtual or hybrid smartphone
						quizzing anywhere in the world. Free to use with up to 4 players or
						pay to host up to 100,000 players in a quiz with no downloads
						required.
					</p>
					<div className="flex items-center justify-around gap-8">
						<Link
							href={"/register"}
							className={buttonVariants({
								variant: "default",
								size: "lg",
								className: "py-2 px-4 text-white bg-blue-600 hover:bg-blue-700",
							})}
						>
							Start Your Free Trial
						</Link>
						<Link
							href={"/"}
							className={buttonVariants({
								variant: "outline",
								size: "lg",
								className:
									"py-2 px-4 text-gray-700 animate-out hover:bg-blue-700",
							})}
						>
							Watch Video
						</Link>
					</div>
				</div>
				<div className="w-full h-full">
					<Image
						src={"/assets/Social-Media-Marketing-Goals.webp"}
						className="w-full h-full bg-cover hover:cursor-pointer"
						width={400}
						height={500}
						alt="hereo"
					/>
				</div>
			</div>

			<div className="container min-h-32 flex flex-row items-center justify-around gap-8 my-12">
				<Image
					src={"/assets/clients-logos.webp"}
					className="w-full h-full bg-cover hover:cursor-pointer"
					width={400}
					height={500}
					alt="logo"
				/>
			</div>

			<div className="container min-h-32 flex flex-col items-center justify-around gap-8 p-12 my-2">
				<div className="w-[60%] flex flex-col items-center justify-center gap-6">
					<h1 className="font-semibold text-xl">Why BiSocial?</h1>
					<p className="font-medium text-base text-center">
						BiSocial is designed to simplify the social media marketing with
						amazing features and deliver a high ROI with smarter pricing, tagged
						with a great customer service team.
					</p>
				</div>
				<div className="w-full grid grid-cols-2 grid-rows-2 gap-8">
					<div className="border border-gray-400-200 rounded-md flex flex-row p-6">
						<div className="w-[20%]">
							<Image
								src={"/assets/Easy-to-use.svg"}
								className="h-full bg-cover hover:cursor-pointer"
								width={60}
								height={60}
								alt="logo"
							/>
						</div>
						<div className="w-full">
							<h1 className="font-base text-sm">
								Easy to use, no learning curve.
							</h1>
							<p>
								Navigate an intuative interface that makes it easy to onboard
								team members, manage client approavals and schedule posts with
								zero hassle.
							</p>
						</div>
					</div>
					<div className="border border-gray-400-200 rounded-md flex flex-row p-6">
						<div className="w-[20%]">
							<Image
								src={"/assets/Easy-to-use.svg"}
								className="h-full bg-cover hover:cursor-pointer"
								width={60}
								height={60}
								alt="logo"
							/>
						</div>
						<div className="w-full">
							<h1 className="font-base text-sm">
								Easy to use, no learning curve.
							</h1>
							<p>
								Navigate an intuative interface that makes it easy to onboard
								team members, manage client approavals and schedule posts with
								zero hassle.
							</p>
						</div>
					</div>
					<div className="border border-gray-400-200 rounded-md flex flex-row p-6">
						<div className="w-[20%]">
							<Image
								src={"/assets/Easy-to-use.svg"}
								className="h-full bg-cover hover:cursor-pointer"
								width={60}
								height={60}
								alt="logo"
							/>
						</div>
						<div className="w-full">
							<h1 className="font-base text-sm">
								Easy to use, no learning curve.
							</h1>
							<p>
								Navigate an intuative interface that makes it easy to onboard
								team members, manage client approavals and schedule posts with
								zero hassle.
							</p>
						</div>
					</div>
					<div className="border border-gray-400-200 rounded-md flex flex-row p-6">
						<div className="w-[20%]">
							<Image
								src={"/assets/Easy-to-use.svg"}
								className="h-full bg-cover hover:cursor-pointer"
								width={60}
								height={60}
								alt="logo"
							/>
						</div>
						<div className="w-full">
							<h1 className="font-base text-sm">
								Easy to use, no learning curve.
							</h1>
							<p>
								Navigate an intuative interface that makes it easy to onboard
								team members, manage client approavals and schedule posts with
								zero hassle.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
