import fs from "node:fs";

const main = async () => {
  const contract = "0x1Ef4238CFdD758c7e30FD237Af2460486b8C7E89";
  const apiKey = "SYJFH2A57YHBA3GAYQNCXU52K9XJHM7TR7";
  const url = `https://api-sepolia.etherscan.io/api?module=contract&action=getabi&address=${contract}&apikey=${apiKey}`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = (await response.json()) as {
    status: string;
    message: string;
    result: string;
  };

  return json.result;
};

(async () => {
  try {
    const abi = await main();
    console.log(abi);
    fs.writeFileSync("./abis/TopsportsFixtureCore.json", abi);
  } catch (e) {
    console.error(e);
  }
})();
