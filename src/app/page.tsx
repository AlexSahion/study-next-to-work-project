import { Promo } from "@/sections/promo";
import { Expirience } from "@/sections/expirience";
import { Comfort } from "@/sections/comfort";
import { ProblemSolving } from "@/sections";
import { Service } from "@/sections";

export default function Home() {
	return (
		<>
			<Promo />
			<Expirience />
			<ProblemSolving />
			<Comfort />
			<Service />
		</>
	);
}
