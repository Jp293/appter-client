curl "https://appter.herokuapp.com/guests/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \

echo
