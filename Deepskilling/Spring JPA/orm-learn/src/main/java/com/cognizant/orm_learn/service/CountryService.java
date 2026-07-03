package com.cognizant.orm_learn.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;

import com.cognizant.orm_learn.model.Country;
import com.cognizant.orm_learn.repository.CountryRepository;

@Service
public class CountryService {

    @Autowired
    private CountryRepository countryRepository;

    @Transactional
    public List<Country> getAllCountries(){

        return countryRepository.findAll();

    }

        @Transactional
    public List<Country> searchCountries(String text){

        return countryRepository.findByNameContainingIgnoreCase(text);

    }


    @Transactional
    public List<Country> searchCountriesSorted(String text){

        return countryRepository.findByNameContainingIgnoreCaseOrderByNameAsc(text);

    }

    @Transactional
    public List<Country> searchCountriesStartingWith(String alphabet){

        return countryRepository.findByNameStartingWithIgnoreCase(alphabet);

    }

}