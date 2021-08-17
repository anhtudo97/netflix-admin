import "./style.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.416</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownward className="featuredIcon nevigation" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.416</span>
          <span className="featuredMoneyRate">
            -11.1 <ArrowDownward className="featuredIcon nevigation" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.416</span>
          <span className="featuredMoneyRate">
            +11.1 <ArrowUpward className="featuredIcon nevigation" />
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};
