// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

'use strict'

/**
 * This function gets a random fun fact from the API
 * The 'async' keyword is used because it will take time from the internet to get data
 */
async function getCatImage() {
  try {
    const response = await fetch(
      'https://catfact.ninja/fact'
    )
    const data = await response.json()
    console.log(data)

    // Output the fun fact to the page
    document.getElementById('show-cat').innerHTML =
      '<b>Cat fun fact:</b> "' + data.fact + '"<br />'
  } catch (error) {
    console.error(error)
  }
}