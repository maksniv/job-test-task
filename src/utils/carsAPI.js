export async function getCarsDescription() {
  try {
    const request = await fetch(`https://test.tspb.su/test-task/vehicles`);
    const response = await request.json();
    // console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
}
