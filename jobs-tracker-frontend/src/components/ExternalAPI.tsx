import React from 'react'
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react'

export const ExternalApiComponent = () => {
  const [message, setMessage] = React.useState('')
  const { getAccessTokenSilently } = useAuth0()

  const callApi = async () => {
    try {
      const token = await getAccessTokenSilently()

      const response = await fetch(`localhost:3001/api/external`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const responseData = await response.json()
      setMessage(responseData)
    } catch (error) {
      setMessage('ERROR: ' + error)
    }
  }

  return (
    <React.Fragment>
      <button color="primary" className="mt-5" onClick={callApi}>
        Ping API
      </button>

      <div className="result-block-container">
        {message && (
          <div className="result-block" data-testid="api-result">
            <h6 className="muted">Result</h6>
            <strong>
              <span>{JSON.stringify(message, null, 2)}</span>
            </strong>
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default withAuthenticationRequired(ExternalApiComponent, {
  onRedirecting: () => <div>Loading</div>,
})

// {
//   "domain": "dev-yrw0t0fy.us.auth0.com",
//   "clientId": "lqxtKBdDoUHJjdAKOTTQAFWdN5SnFkvc",
//   "audience": "https://cs673-api-auth0.com"
// }
