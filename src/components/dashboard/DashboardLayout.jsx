import TotalUsersTile from "./TotalUsersTile";
import UsersPerDayChart from "./UsersPerDayChart";
import AvatarDistributionChart from "./AvatarDistributionChart";
import SignupTimeChart from "./SignupTimeChart";
import RecentUsersList from "./RecentUsersList";

function DashboardLayout() {
  return (
    <>
      <h1 className="px-6 pt-6 text-gray-900 text-3xl sm:text-5xl font-extrabold">
        Dashboard
      </h1>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-min">
        <div className="bg-white rounded-xl shadow-md p-4 flex items-center justify-center hover:shadow-lg transition">
          <TotalUsersTile />
        </div>

        <div className="sm:col-span-2 lg:col-span-3 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
          <UsersPerDayChart />
        </div>

        <div className="bg-white col-span-2 rounded-xl shadow-md p-4 hover:shadow-lg transition">
          <AvatarDistributionChart />
        </div>

        <div className="sm:col-span-2 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
          <SignupTimeChart />
        </div>

        <div className="col-span-1 lg:col-span-4 bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
          <RecentUsersList />
        </div>
      </div>
    </>
  );
}

export default DashboardLayout;
