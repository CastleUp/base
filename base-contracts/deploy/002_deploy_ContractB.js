module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ContractB", {
    from: deployer,
    args: [], // ERC20 токен создается сразу
    log: true,
  });
};
