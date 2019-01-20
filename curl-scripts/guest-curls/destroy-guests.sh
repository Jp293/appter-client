curl "https://appter.herokuapp.com/guests/${ID}" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \


echo
