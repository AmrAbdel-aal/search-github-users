import React from "react";
import ExampleChart from "./ExampleChart";
import Pie3D from "./Pie3D";
import { useGlobalContext } from "./Context";
import Doughnut2d from "./Doughnut2d";
import Bar3d from "./Bar3d";
import Column3d from "./Colum3d";
const Repo = () => {
  const { repos } = useGlobalContext();
  const total = repos.reduce((total, item) => {
    const { language } = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      total[language] = { label: language, value: 1 };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
      };
    }
    return total;
  }, {});
  const totalStars = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) {
      return total;
    }
    if (!total[language]) {
      total[language] = { label: language, value: stargazers_count };
    } else {
      total[language] = {
        ...total[language],
        value: total[language].value + stargazers_count,
      };
    }
    return total;
  }, {});

  let { stars, forks } = repos.reduce(
    (total, item) => {
      const { stargazers_count, name, forks } = item;
      total.stars[stargazers_count] = { label: name, value: stargazers_count };
      total.forks[forks] = { label: name, value: forks };
      return total;
    },
    { stars: {}, forks: {} }
  );
  const chartData = Object.values(total);
  const starsData = Object.values(totalStars);
  const forksData = Object.values(forks);
  stars = Object.values(forks);

  // console.log(chartData);
  // const chartData = [
  //   {
  //     label: "javascript",
  //     value: "280",
  //   },
  //   {
  //     label: "html",
  //     value: "90",
  //   },
  //   {
  //     label: "css",
  //     value: "100",
  //   },
  // ];
  return (
    <div className="repos ">
      {/* <ExampleChart data={chartData} /> */}
      <Pie3D data={chartData} />
      <Doughnut2d data={starsData} />
      <Bar3d data={forksData} />
      <Column3d data={stars} />
    </div>
  );
};

export default Repo;
