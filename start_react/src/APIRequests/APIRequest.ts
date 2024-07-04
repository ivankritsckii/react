export async function APIRequest (searchValue: string) {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow" as const,
    };
  
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?search=${searchValue}`,
        requestOptions,
      );
      const result = await response.text();
      //const json = JSON.parse(result);
      console.log(result);
      return result;
    } catch (error) {
      console.error(error);
    }

}