export const fetchCategories = async (token: string) => {
    // const res = await fetch(
    //   "https://web-api.binge.buzz/api/v3/banner/vod-home",
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${token}`,
    //       "Device-Type": "web",
    //     },
    //   }
    // );

    const responseAllCategories = await fetch(
      "https://web-api.binge.buzz/api/v3/page/allCategories",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          "Device-Type": "web",
        },
        body: JSON.stringify({
          page: "web-home-vod",
        }),
      }
    );

    const resAllCatData = await responseAllCategories.json();
    return resAllCatData.categories.slice(1, 2)
  };