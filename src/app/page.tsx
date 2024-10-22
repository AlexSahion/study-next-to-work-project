import { Promo } from "@/sections";
import { Expirience } from "@/sections";
import { Comfort } from "@/sections";
import { ProblemSolving } from "@/sections";
import { Service } from "@/sections";
import { Questions } from "@/sections";
import { CountCost } from "@/sections";
import { Reliability } from "@/sections";
import { AnswersQuestions } from "@/sections";
import { Stages } from "@/sections";

export default function Home() {
	return (
		<>
			<Promo />
			<Expirience />
			<ProblemSolving />
			<Comfort />
			<Service />
			<CountCost />
			<Stages />
			<AnswersQuestions />
			<Reliability />
			<Questions />
		</>
	);
}
