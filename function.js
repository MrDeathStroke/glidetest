window.function = function(Email) 
{
if (Email.value === undefined) return undefined;
  const response = await fetch(`http://apilayer.net/api/validate?access_key=9c511ff979f422c3c1bb7cdd2dbe080f&number=${Email.value}`);
  const {data} = await response.json();
  return data.country_code;
  
}
