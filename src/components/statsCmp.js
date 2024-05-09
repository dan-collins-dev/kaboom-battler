"use strict";
/**
 * Creates a Stats Component
 * @param {number} maxHp    The starting max health of the parent
 * @param {number} att      The starting attack stat of the parent
 * @param {number} def      The starting defense stat of the parent
 * @return {Object}         Stats Component
 */
const stats = (maxHp, att, def) => {
    let maxHealth = maxHp;
    let currentHealth = maxHealth;
    let attack = att;
    let defense = def;
    let experience = 0;
    let gold = 0;

    return {
        id: "stats",

        add: () => {},

        /**
         * Sets the Max Health of the parent
         * @param {number} amount The amount of health to be set
         */
        setMaxHealth: (amount) => {
            maxHealth = amount;
        },

        /**
         * Gets the Max Health of the parent
         * @returns The max health of the parent
         */
        getMaxHealth: () => maxHealth,

        /**
         * Sets the current health of the parent
         * @param {number} amount The current health of the parent
         */
        setCurrentHealth: (amount) => {
            currentHealth = amount;
        },

        /**
         * Gets the current health of the parent
         * @returns The current health of the parent
         */
        getCurrentHealth: () => currentHealth,

        /**
         * Sets the attack stat of the parent
         * @param {number} value The value being set to the parent's attack
         */
        setAttack: (value) => {
            attack = value;
        },

        /**
         * Gets the attack stat of the parent
         * @returns The parent's attack stat
         */
        getAttack: () => attack,

        /**
         * Sets the defense stat of the parent
         * @param {number} value The value being set to the parent's defense
         */
        setDefense: (value) => {
            defense = value;
        },

        /**
         * Gets the defense stat of the parent
         * @returns The parent's defense stat
         */
        getDefense: () => defense,

        /**
         * Sets the experience value of the parent
         * @param {number} value  The value being set to the parent's experience
         */
        setExperience: (value) => {
            experience = value;
        },

        /**
         * Gets the experience of the parent
         * @returns The experience of the parent
         */
        getExperience: () => experience,

        /**
         * Sets the amount of gold the parent holds
         * @param {number} amount The amount of gold
         */
        setGold: (amount) => {
            gold = amount;
        },

        /**
         * Gets the amount of gold the parent has
         * @returns The amount of the parent has
         */
        getGold: () => gold,

        inspect: () => {
            return (
                "\n\tHP: " +
                currentHealth +
                "/" +
                maxHealth +
                "\n\tAtt: " +
                attack +
                "\n\tDef: " +
                defense +
                "\n\tXP: " +
                experience +
                "\n\tGold: " +
                gold
            );
        },

        // takeDamage: (dmgAmt) => {
        //     console.log(`Taking ${dmgAmt} Damage`);
        //     currentHealth -= clamp(dmgAmt, 0, maxHealth);
        //     console.log(`Current Health: ${currentHealth}`);
        //     if (currentHealth <= 0) console.log(`Death isn't Implemented`);
        // },

        // destroy: () => {
        //     console.log("I'm being destroyed");
        // },
    };
};

export default stats;
