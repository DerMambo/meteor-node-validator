class MyValidator
  @validateValidations: (data, validations) ->
    errors = []
    for field, value of data
      try
        # throws exception if it does not exist
        validations[field](value)
      catch e
        err = {}
        err[field] = e.message
        errors.push(err)
    return errors