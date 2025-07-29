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
import { Assortment } from "@/sections";
import { Application } from "@/sections";
import { Partners } from "@/sections";
import { Popup } from "@/sections";

export default function Home() {
	return (
		<>
			<Popup />
			<Promo />
			<Expirience />
			<ProblemSolving />
			<Comfort />
			<Application />
			<Assortment />
			<Service />
			<Partners />
			<CountCost />
			<Stages />
			<AnswersQuestions />
			<Reliability />
			<Questions />
		</>
	);
}
