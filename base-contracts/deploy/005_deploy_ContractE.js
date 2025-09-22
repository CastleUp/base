module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ContractE", {
    from: deployer,
    args: [], // owner = deployer автоматически
    log: true,
  });
};
