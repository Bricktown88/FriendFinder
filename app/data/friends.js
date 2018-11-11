const express = require("express");
const path = require("path");

let friends = [

    {
        name: "Ned Stark",
        photo: "https://upload.wikimedia.org/wikipedia/en/5/52/Ned_Stark-Sean_Bean.jpg",
        scores: [
            5,
            3,
            3,
            4,
            2,
            5,
            1,
            2,
            1,
            5
        ]
    },
    {

        name: "Jaime Lanniser",
        photo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Jaime_Lannister-Nikolaj_Coster-Waldau.jpg",
        scores: [
            3,
            4,
            4,
            5,
            1,
            4,
            3,
            3,
            4,
            3
        ]
    },
    {
        name: "Arya Stark",
        photo: "https://upload.wikimedia.org/wikipedia/en/3/39/Arya_Stark-Maisie_Williams.jpg",
        scores: [
            3,
            2,
            3,
            5,
            3,
            4,
            2,
            3,
            4,
            5
        ]
    },
    {
        name: "Jon Snow",
        photo: "https://upload.wikimedia.org/wikipedia/en/f/f0/Jon_Snow-Kit_Harington.jpg",
        scores: [
            5,
            3,
            4,
            5,
            4,
            5,
            2,
            2,
            4,
            5
        ]
    },
    {
        name: "Cersei Lanniser",
        photo: "https://upload.wikimedia.org/wikipedia/en/9/94/Cersei_Lannister-Lena_Headey.jpg",
        scores: [
            1,
            5,
            1,
            1,
            1,
            4,
            5,
            3,
            5,
            4
        ]
    },
    {
        name: "Joffrey Baratheon",
        photo: "https://upload.wikimedia.org/wikipedia/en/b/bd/Joffrey_Baratheon-Jack_Gleeson.jpg",
        scores: [
            1,
            5,
            2,
            1,
            3,
            2,
            5,
            3,
            4,
            1
        ]
    },
    {
        name: "The Hound",
        photo: "https://upload.wikimedia.org/wikipedia/en/b/b4/Sandor_Clegane-The_Hound-Rory_McCann.jpg",
        scores: [
            3,
            2,
            5,
            5,
            1,
            1,
            1,
            5,
            4,
            4
        ]
    },
    {
        name: "Tyrion Lannister",
        photo: "https://upload.wikimedia.org/wikipedia/en/5/50/Tyrion_Lannister-Peter_Dinklage.jpg",
        scores: [
            4,
            4,
            2,
            2,
            4,
            2,
            4,
            5,
            4,
            3
        ]
    },
    {
        name: "Ramsay Bolton",
        photo: "https://upload.wikimedia.org/wikipedia/en/5/5e/Ramsay_Bolton-_-Iwan_Rheon.jpg",
        scores: [
            1,
            4,
            4,
            4,
            2,
            1,
            5,
            4,
            5,
            3
        ]
    },
    {
        name: "Daenerys Targaryen",
        photo: "https://upload.wikimedia.org/wikipedia/en/0/0d/Daenerys_Targaryen_with_Dragon-Emilia_Clarke.jpg",
        scores: [
            4,
            3,
            3,
            2,
            5,
            2,
            5,
            3,
            4,
            5
        ]
    }
]

module.exports = friends;