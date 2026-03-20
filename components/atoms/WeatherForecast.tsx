import Link from "next/link";
import { ReactNode } from "react";

export default function WeatherForecast({
  classNames,
}: {
  classNames?: string;
}): ReactNode {
  return (
    <div
      className={`bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-body-xs text-amber-900 ${classNames}`}
    >
      <p>
        Falls die aktuelle Tour aufgrund des Wetters verschoben oder abgesagt
        werden muss, steht es hier am Montagabend bis spätestens 17:00 Uhr. Wenn
        hier nichts steht, findet die Tour statt!
      </p>
      <p className="mt-2">
        Für die aktuelle Wettervorhersage{" "}
        <Link
          href="http://wetterstationen.meteomedia.de/station=109440&wahl=vorhersage"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-amber-700"
        >
          hier klicken
        </Link>
        .
      </p>
    </div>
  );
}
