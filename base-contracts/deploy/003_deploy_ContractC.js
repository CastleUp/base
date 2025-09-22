module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ContractC", {
    from: deployer,
    args: [], // NFT коллекция без параметров
    log: true,
  });
};
