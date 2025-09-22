module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  await deploy("ContractA", {
    from: deployer,
    args: [], // нет аргументов конструктора
    log: true,
  });
};
