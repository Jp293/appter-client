curl "https://appter.herokuapp.com/listings/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \

echo
