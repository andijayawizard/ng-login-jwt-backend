module.exports = (sequelize, Sequelize) => {
  const Pasien = sequelize.define("pasiens", {
    nama: {
      type: Sequelize.STRING,
    },
    hp: {
      type: Sequelize.STRING,
    },
    alamat: {
      type: Sequelize.STRING,
    },
  });

  return Pasien;
};
