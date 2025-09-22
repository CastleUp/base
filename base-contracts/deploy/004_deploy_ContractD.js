module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ContractD", {
    from: deployer,
    args: [], // простой counter
    log: true,
  });
};
