import { Model, DataTypes } from "sequelize";
import { dbConfig } from "../config/db.config";

export class Users extends Model { }

export const initUsers = (dbConfig) => {

    Users.init(

        {
            //ATTRIBUTE DEFINITIONS
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },
            userName: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "Name cannot be an empty field" },
                    len: {
                        args: [2, 100],
                        msg: "Name must contain 2 to 100 characters"
                    },
                    is: {
                        args: /^[a-zA-ZÁ-ÿñÑ\s]+$/,
                        msg: "Name field supports characters from english and spanish only"
                    }
                }
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: { msg: "El correo electrónico ingresado ya está en uso" },
                validate: {
                    notEmpty: { msg: "El correo no puede ser un campo vacío" },
                    isEmail: { msg: "El correo electrónico ingresado no es válido" },
                },
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: { msg: "Password cannot be empty" },
                    notNull: { msg: "Password cannot be null" },
                    is: {
                        args: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/,
                        msg: "Password is invalid: Minimun 8 characters, maximum 15 characters, At least one lowerCase and one upperCase, At least one number, no blank spaces, at least one spetial character",
                    },
                },
            },
            role: {
                role: {
                    type: DataTypes.ENUM('superAdmin', 'user_dir', 'user_dir_op', 'user_op'),
                    defaultValue: 'user_op',
                    allowNull: false
                }
            }

        },
        //MODEL OPTIONS
        {
            sequelize: dbConfig,    // Instancia de conexión (obligatorio)
            modelName: "Users",     // Nombre interno del Modelo
            tableName: "users",     // Nombre de la entidad en Postgres
            timestamps: true,       // Crea cratedAt y updatedAt
            paranoid: true          // Enable softDelete using destroy, craeates the stamp deletedAt

        }
    )

}