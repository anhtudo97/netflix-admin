import { Chart } from "../../components/Chart";
import { FeaturedInfo } from "../../components/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import { WidgetSm } from "../../components/WidgetSm";
import { WidgetLg } from "../../components/WidgetLg";
import { useCallback, useEffect, useMemo, useState } from "react";
import axios from "axios";

interface Stat {
  _id: string;
  total: number;
}

interface UserStat {
  name: string;
  "New user": number;
}

export const Home = () => {
  const MONTHS = useMemo(
    () => [
      "jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState<UserStat[]>([]);

  const getStats = useCallback(async () => {
    try {
      const res = await axios.get("/users/stats", {
        headers: {
          token:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZTZmYzQ2NDk0Mjc3MTYwNDg4MmMxNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYyNTgzMjMxMSwiZXhwIjoxNjI2MjY0MzExfQ.ATXV-1TTWIGyVBttTQSf0erRWjsgZ8jHQv1ZsUixbng",
        },
      });
      const statsList = res.data.sort(
        (a: Stat, b: Stat) => parseInt(a._id) - parseInt(b._id)
      );

      statsList.map((item: Stat) =>
        setUserStats((prev: UserStat[]) => [
          ...prev,
          { name: MONTHS[(item._id, -1)], "New user": item.total },
        ])
      );
    } catch (error) {
      console.log(error);
    }
  }, [MONTHS]);

  useEffect(() => {
    getStats();
  }, [MONTHS, getStats]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};
